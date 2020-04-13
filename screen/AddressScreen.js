import * as React from 'react'
import CommonContainer from '../components/CommonContainer'
import AddressCard from '../components/AddressCard'

function AddressScreen({ route }) {
  return (
    <CommonContainer>
      <AddressCard route={route.params} />
    </CommonContainer>
  )
}

export default AddressScreen
