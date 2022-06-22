const mailformat =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const validateSignIn = (email, password) => {
  if (!email.length > 0) {
    return {
      message: "Please provide email address",
      status: false,
    };
  } else if (!email.match(mailformat)) {
    return {
      message: "Please provide valid email address",
      status: false,
    };
  } else if (!password.length > 0) {
    return {
      message: "Please enter password",
      status: false,
    };
  } else {
    return {
      message: "",
      status: true,
    };
  }
};

export const validateSignUp = (name, email, password) => {
  if (!name.length > 0) {
    return {
      message: "Please provide name",
      status: false,
    };
  } else if (!email.length > 0) {
    return {
      message: "Please provide email address",
      status: false,
    };
  } else if (!email.match(mailformat)) {
    return {
      message: "Please provide valid email address",
      status: false,
    };
  } else if (!password.length > 0) {
    return {
      message: "Please enter password",
      status: false,
    };
  } else {
    return {
      message: "",
      status: true,
    };
  }
};
