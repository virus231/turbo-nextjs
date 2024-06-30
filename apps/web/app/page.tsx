'use client';

import {
  FormBuilder,
  FormComponent,
  FormDirector,
} from '@repo/form-builders/main';
import { MainContainer } from '@repo/ui/components';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const builder = new FormBuilder();
  const director = new FormDirector(builder);

  const [formType, setFormType] = useState('login');

  const loginFields = director.createLoginForm();
  const registrationFields = director.createRegistrationForm();

  const customFields = builder
    .addTextField('name', 'Full Name')
    .addNumberField('age', 'Age')
    .addSelectField('favoriteColor', 'Favorite Color', ['Red', 'Green', 'Blue'])
    .build();

  console.log('registrationFields', registrationFields);

  return (
    <main className={styles.main}>
      <MainContainer>
        <div className="container mx-auto mt-10">
          <div className="mb-4">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => setFormType('login')}
            >
              Login Form
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => setFormType('registration')}
            >
              Registration Form
            </button>
            <button
              type="button"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setFormType('custom')}
            >
              Custom Form
            </button>
          </div>
          {formType === 'login' && <FormComponent fields={loginFields} />}
          {formType === 'registration' && (
            <FormComponent fields={registrationFields} />
          )}
          {formType === 'custom' && <FormComponent fields={customFields} />}
        </div>
      </MainContainer>
    </main>
  );
}
