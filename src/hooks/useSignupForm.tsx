import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { SignupFormType } from '../model/SignupFormType';
import { SignupSchema } from '../schema/SignupSchema';

function useSignForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormType>({
    mode: 'all',
    resolver: yupResolver(SignupSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
    isValid,
  };
}

export default useSignForm;
