import React from 'react'
import InternshipsRunningBreadcrumb from '../../Component/InternshipsRunningBreadcrumb/InternshipsRunningBreadcrumb'
import InternshipsRunningCard from '../../Component/InternshipsRunningCard/InternshipsRunningCard'
import RunningInternshipBreadcrumb from '../../Component/RunningInternshipBreadcrumb/RunningInternshipBreadcrumb'

const RunningInternships = () => {
  return (
    <div>
        <InternshipsRunningBreadcrumb/>
        <InternshipsRunningCard/>
        <RunningInternshipBreadcrumb/>
    </div>
  )
}

export default RunningInternships