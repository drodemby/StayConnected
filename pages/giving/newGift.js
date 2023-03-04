import Head from 'next/head';
import React from 'react';
import GivingForm from '../../components/forms/GivingForm';

export default function CreateMinistry() {
  return (
    <>
      <Head>
        <title>Add New Board</title>
      </Head>
      <GivingForm />
    </>
  );
}
