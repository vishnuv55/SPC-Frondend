import { useSetRhinoState } from 'react-rhino';
import React, { useEffect, useState } from 'react';

import './style.scss';
import Button from '../../../common/button';
import ContactDetails from './ContactDetails';
import Loading from '../../../common/loading';
import PersonalDetails from './PersonalDetails';
import useForm from '../../../../hooks/useForm';
import GuardianDetails from './GuardianDetails';
import PlacementDetails from './placement-details';
import EducationalDetails from './EducationalDetails';
import useApiError from '../../../../hooks/useApiError';
import { convertDateFormate } from '../../../../helpers/date';
import { getStudentDetails, editStudentProfile } from '../../../../Services/student';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [buttonLoading, setButtonLoading] = useState(false);

  const setPageTitle = useSetRhinoState('pageTitle');
  const setToastMessage = useSetRhinoState('toastMessage');
  // State to store Student details
  const { handleApiError } = useApiError();
  const { values, onChange, error, handleError, setValues } = useForm({
    name: '',
    dob: '',
    gender: '',
    tenth_percentage: '',
    tenth_cgpa: '',
    twelfth_percentage: '',
    twelfth_cgpa: '',
    btech_cgpa: '',
    number_of_backlogs: '',
    phone_number: '',
    line_one: '',
    line_two: '',
    state: '',
    zip: '',
    guardian_name: '',
    guardian_phone_number: '',
    placed_company: '',
    ctc: '',
  });

  useEffect(() => {
    setPageTitle('Update Your Profile');
    fetchStudentDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPageTitle]);

  // Function to fetch student details
  const fetchStudentDetail = async () => {
    setLoading(true);
    try {
      const student = await getStudentDetails();
      const user = student.data;
      const dob = user.date_of_birth ? convertDateFormate(user.date_of_birth) : '';
      const studentObj = {
        name: user.name ? user.name : '',
        dob,
        gender: user.gender ? user.gender : '',
        tenth_percentage: user.tenth_mark ? user.tenth_mark.percentage : '',
        tenth_cgpa: user.tenth_mark ? user.tenth_mark.cgpa : '',
        twelfth_percentage: user.plus_two_mark ? user.plus_two_mark.percentage : '',
        twelfth_cgpa: user.plus_two_mark ? user.plus_two_mark.cgpa : '',
        btech_cgpa: user.btech_cgpa ? user.btech_cgpa : '',
        number_of_backlogs: user.number_of_backlogs !== undefined ? user.number_of_backlogs : '',
        phone_number: user.phone_number ? user.phone_number : '',
        line_one: user.address ? user.address.line_one : '',
        line_two: user.address ? user.address.line_two : '',
        state: user.address ? user.address.state : '',
        zip: user.address ? user.address.zip : '',
        guardian_name: user.guardian_name ? user.guardian_name : '',
        guardian_phone_number: user.guardian_contact_number ? user.guardian_contact_number : '',
        placed_company: user.placed_company ? user.placed_company : '',
        ctc: user.ctc ? user.ctc : '',
      };
      setValues(studentObj);
      setLoading(false);
    } catch (err) {
      handleApiError(err);
      setLoading(false);
    }
  };

  const handleEditProfile = async () => {
    if (
      values.name !== '' &&
      values.dob !== '' &&
      values.gender !== '' &&
      values.tenth_percentage !== '' &&
      values.tenth_cgpa !== '' &&
      values.twelfth_percentage !== '' &&
      values.twelfth_cgpa !== '' &&
      values.btech_cgpa !== '' &&
      values.number_of_backlogs !== '' &&
      values.phone_number !== '' &&
      values.line_one !== '' &&
      values.line_two !== '' &&
      values.state !== '' &&
      values.zip !== '' &&
      values.guardian_name !== '' &&
      values.guardian_phone_number !== '' &&
      error.name === '' &&
      error.dob === '' &&
      error.gender === '' &&
      error.tenth_percentage === '' &&
      error.tenth_cgpa === '' &&
      error.twelfth_percentage === '' &&
      error.twelfth_cgpa === '' &&
      error.btech_cgpa === '' &&
      error.number_of_backlogs === '' &&
      error.phone_number === '' &&
      error.line_one === '' &&
      error.line_two === '' &&
      error.state === '' &&
      error.zip === '' &&
      error.guardian_name === '' &&
      error.guardian_phone_number === ''
    ) {
      setButtonLoading(true);
      const editObj = {
        name: values.name,
        date_of_birth: values.dob,
        gender: values.gender,
        tenth_mark: {
          percentage: parseFloat(values.tenth_percentage, 10),
          cgpa: parseFloat(values.tenth_cgpa, 10),
        },
        plus_two_mark: {
          percentage: parseFloat(values.twelfth_percentage, 10),
          cgpa: parseFloat(values.twelfth_cgpa, 10),
        },
        btech_cgpa: parseFloat(values.btech_cgpa, 10),
        number_of_backlogs: parseInt(values.number_of_backlogs, 10),
        phone_number: parseInt(values.phone_number, 10),
        address: {
          line_one: values.line_one,
          line_two: values.line_two,
          state: values.state,
          zip: values.zip.toString(),
        },

        guardian_name: values.guardian_name,
        guardian_contact_number: parseInt(values.guardian_phone_number, 10),
      };
      try {
        await editStudentProfile(editObj);
        setToastMessage({
          severity: 'success',
          message: 'Profile update successful',
        });
        setButtonLoading(false);
      } catch (err) {
        handleApiError(err);
        setButtonLoading(false);
      }
    } else {
      setToastMessage({
        severity: 'Error',
        message: 'Please fill all the fields',
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="profile">
      <div className="input-form">
        <div className="col1">
          <PersonalDetails
            values={values}
            onChange={onChange}
            error={error}
            handleError={handleError}
          />
          <EducationalDetails
            values={values}
            onChange={onChange}
            error={error}
            handleError={handleError}
          />
        </div>
        <div className="col2">
          <ContactDetails
            values={values}
            onChange={onChange}
            error={error}
            handleError={handleError}
          />
          <GuardianDetails
            values={values}
            onChange={onChange}
            error={error}
            handleError={handleError}
          />
        </div>
      </div>
      <div className="button-wrapper">
        <Button type="button" onClick={handleEditProfile} loading={buttonLoading}>
          Edit Profile
        </Button>
      </div>
      <div className="placement-wrapper">
        <PlacementDetails
          values={values}
          onChange={onChange}
          error={error}
          handleError={handleError}
        />
      </div>
    </div>
  );
};

export default Profile;
