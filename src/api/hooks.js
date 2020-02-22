import axios from 'axios';
import { useState, useCallback, useRef } from 'react';

// const templateType = (type) => {};

const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return {
    valid: Boolean(regex.test(String(email).toLowerCase())),
    message: 'Email is invalid',
  };
};

const validatePhone = (phone) => {
  const regex = /^[0-9\+\s-]{8,13}$/;
  return {
    valid: Boolean(validateInput(phone) && regex.test(phone)),
    message: 'Phone is invalid',
  };
};

const validateInput = (text) => {
  return { valid: Boolean(text.length === 0), message: 'Input is invalid' };
};

const validateFunc = (type = 'input', v) => {
  let message = '';

  switch (type) {
    case 'email':
      if (!validateEmail(v)) message = 'Email is invalid';
      break;
    case 'phone':
      if (!validatePhone(v)) message = 'Phone is invalid';
      break;

    default:
      if (!validateInput(v)) message = '';
      break;
  }

  return message;
};

const defaultDataKeyConfig = {
  required: false,
};

const HookProto = {
  validateEmail,
  validatePhone,
  validateInput,

  submit(data) {
    let canSubmit = false;

    const data_map = Object.keys(data).map((k, i) => {
      const v = data[k];

      const isPrimitive = typeof v !== 'object';

      let item = { ...defaultDataKeyConfig };
      item = isPrimitive ? { ...item, value: v } : { ...item, ...v };

      let valid = true,
        message = '';

      if (item.required) {
        const { valid: _va, message: _msg } = validateInput(item.value);

        valid = _va;
        message = _msg;
      }
      if (valid && item.validator) {
        const { valid: _va, message: _msg } = item.validator(item.value);

        valid = _va;
        message = _msg;
      }

      if (!valid) this._setField(k, message);

      return item.value;
    });

    if (!canSubmit) return;
    // name = {value: 'fefe', ...defaultConfig}
    // name = { value: "Mike", required: true, }
    // name: { value: string, required: boolean, validator?: (value: string) => ({ valid: boolean, message: string }) }

    // if (validateEmail(email)) return void this._setField('email', '');
    // if (validatePhone(phone)) return void this._setField('phone', '');
    // if (validateInput(name)) return void this._setField('name', '');

    // if (validateInput(message)) return void this._setField('message', '');

    const config = {
      service_id: 'gmail',
      template_id: this._config.template_id,
      user_id: 'user_1e5MPaDWRUDwFiPiOHMyx',
      template_params: { ...data_map },
    };

    const env = this;

    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', config)
      .then((response) => {
        console.log(response);
        env._setResponse('success', 'Wiadomość wysłana pomyślnie');
      })
      .catch((error) => {
        console.log(error);
        env._setResponse('failed', 'Coś poszło nie tak');
      });
  },
};

const defaultConfig = {
  template_id: 'contact',
};

export const useEmailSubmit = (config = defaultConfig) => {
  const [response, setResponse] = useState({
    status: 'init',
    message: '',
  });
  const [fields, setFields] = useState({});

  const _setResponse = useCallback(
    (status, message) => {
      setResponse({ status, message, fields });
    },
    [fields],
  );

  const _setField = (f, v) => void setFields((obj) => ({ ...obj, [f]: v }));
  const _clearField = (f) =>
    void setFields((obj) => {
      const _obj = { ...obj };
      delete _obj[f];
      return _obj;
    });

  const ref = useRef(null);

  if (ref.current === null) {
    ref.current = [
      response,
      {
        __proto__: HookProto,
        _setResponse: setResponse,
        _setField,
        _clearField,
        _config: config,
      },
    ];
  }
  ref.current[0] = { ...response, fields };

  return ref.current;
};
