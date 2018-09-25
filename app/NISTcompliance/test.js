const { validate, buildLookup } = require("./index");

test("builds lookup correctly", () => {
  expect(buildLookup("password\npassw0rd\ntree\ntreetree")).toEqual({
    password: true,
    passw0rd: true,
    tree: true,
    treetree: true
  });
});

test("it validates correctly", () => {
  expect(
    validate("password", {
      password: true,
      passw0rd: true,
      tree: true,
      treetree: true
    })
  ).toEqual({
    isValid: false,
    reason: "Passwords must not be common."
  });

  expect(
    validate("uncommonpassword", {
      password: true,
      passw0rd: true,
      tree: true,
      treetree: true
    })
  ).toEqual({
    isValid: true,
    reason: undefined
  });
});
