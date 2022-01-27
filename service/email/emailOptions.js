const emailOptions = (email, confirmationLink) => {
  return {
    from: "oleg.your.bondarenko@meta.ua",
    to: email,
    subject: "Registration confirmation",
    text: `To finish your registration please click on this link: http://localhost:3000/api/users/verify/${confirmationLink}`,
  };
};

module.exports = emailOptions;
