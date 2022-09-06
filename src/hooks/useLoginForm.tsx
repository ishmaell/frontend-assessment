import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginFormType } from '../models/LoginFormType';
import { LoginSchema } from '../schema/LoginSchema';

function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
    isValid,
  };
}

export default useLoginForm;
