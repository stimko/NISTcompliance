const minLength = 8;
const maxLength = 64;
const ASCII = /^[\x20-\x7E]*$/;

exports.validate = (string, lookup) => {
  if (string.length < minLength || string.length > maxLength) {
    return {
      isValid: false,
      reason: "Passwords must be between 8 and 64 characters in length."
    };
  }

  if (!ASCII.test(string)) {
    return {
      isValid: false,
      reason: "Passwords must only contain ASCII characters."
    };
  }

  if (lookup[string]) {
    return {
      isValid: false,
      reason: "Passwords must not be common."
    };
  }
  return {
    isValid: true
  };
};

exports.buildLookup = passwordString => {
  let i = 0;
  let password = "";
  const lookup = {};
  const passwordStringLength = passwordString.length;
  while (i <= passwordStringLength) {
    if (passwordString.charAt(i) === "\n" || i === passwordString.length) {
      lookup[password] = true;
      password = "";
    } else {
      password += passwordString.charAt(i);
    }
    i++;
  }
  return lookup;
};
