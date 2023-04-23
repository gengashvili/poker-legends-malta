import React from 'react'
import LeaderBoard from '../../Components/LeaderBoard'
import LinkText from '../../Components/LinkText'

import TicketsBoard from '../Home/TicketsBoard'

export default function NewYearSeries() {
  return (
    <div>
      <LeaderBoard/>
      <TicketsBoard/>
      <LinkText/>
    </div>
  )
}
