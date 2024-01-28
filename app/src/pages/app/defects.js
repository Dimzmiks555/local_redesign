import Layout from '@/components/Layout/Layout'
import React from 'react'
import styles from "@/styles/DefectsPage.module.css";
import DefectsList from '@/modules/DefectsList/DefectsList';

const DefectsPage = () => {
  return (
    <Layout title="Дефекты">
        <DefectsList/>
    </Layout>
  )
}

export default DefectsPage