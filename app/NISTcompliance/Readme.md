# NIST compliance utility

Utility to validate passwords and make sure they are NIST compliant.

Passwords MUST

1. Have an 8 character minimum
2. AT LEAST 64 character maximum
3. Allow all ASCII characters and spaces (unicode optional)
4. Not be a common password

## Usage

```js
import { buildLookup, validate } from "NISTvalidate";
```

#### buildLookup(string passwords): { string password: true }

Format the given value in bytes into a string. If the value is negative, it is kept as such. If it is a float, it is
rounded.

**Arguments**

| Name      | Type     | Description      |
| --------- | -------- | ---------------- |
| passwords | `string` | Common passwords |

**Returns**

| Name   | Type               | Description                               |
| ------ | ------------------ | ----------------------------------------- |
| lookup | `{ string: true }` | Return lookup object of common passwords. |

**Example**

```js
buildLookup("password\npassw0rd\ntree");
// output: { password: true, passw0rd: true, tree: true }
```

#### validate(password: string, lookup: { string : true } ): { isValid: boolean, reason: string }

Validate that a password is NIST compliant. Returns whether it is valid and a reason if it is not.
// output: '{ isValid: false, reason: 'Passwords must be between 8 and 64 characters in length.' }'

**Arguments**

| Name     | Type               | Description                          |
| -------- | ------------------ | ------------------------------------ |
| password | `string`           | Password to validate                 |
| lookup   | `{ string: true }` | Common passwords to validate against |

**Returns**

| Name       | Type                                   | Description                                                           |
| ---------- | -------------------------------------- | --------------------------------------------------------------------- |
| validation | `{ isValid: boolean, reason: string }` | Return whether the password is compliant and the reason if it is not. |

**Example**

```js
validate("password");
// output: { isValid: false, reason: 'Passwords must not be common.'}
```

## License

[MIT](LICENSE)
