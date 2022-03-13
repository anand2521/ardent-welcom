const ValidateFormFields = values => {
  const errors = {}
  //Child Fields
  if (!values.firstNameChild) {
    errors.firstNameChild = 'Required'
  }
  if (!values.lastNameChild) {
    errors.lastNameChild = 'Required'
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (values.birthday) {
    //See inline Field validation for birthday
  }
  if (!values.gender) {
    errors.gender = 'Required'
  }
  if (!values.school) {
    errors.school = 'Required'
  }
  if (!values.grade) {
    errors.grade = 'Required'
  }
  if (!values.primaryInterest) {
    errors.primaryInterest = 'Required'
  }
  if (!values.secondaryInterests || values.secondaryInterests.length === 0) {
    errors.secondaryInterests = 'Required'
  }
  if (!values.courseGrade) {
    errors.courseGrade = 'Required'
  }
  if (!values.courseChallenge) {
    errors.courseChallenge = 'Required'
  }
  if (!values.languagePreference) {
    errors.languagePreference = 'Required'
  }

  //Parent Fields
  if (!values.firstNameParent) {
    errors.firstNameParent = 'Required'
  }
  if (!values.lastNameParent) {
    errors.lastNameParent = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.relationship) {
    errors.relationship = 'Required'
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required'
  } else if (values.phoneNumber.length !== 10) {
    errors.phoneNumber = 'Phone number must be 10 digits long'
  }

  return errors
}

export default ValidateFormFields
