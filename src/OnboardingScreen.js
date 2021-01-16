import React from 'react'

import { 
    BackHandler,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

import Onboarding from 'react-native-onboarding-swiper'

// Assets
import Onboarding1 from '../assets/onboarding-1.svg'
import Onboarding2 from '../assets/onboarding-4.svg'
import Onboarding3 from '../assets/onboarding-5.svg'

const Dots = ({selected}) => {
  let backgroundColor

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor
      }}
    >
    </View>
  )
}

const Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal: 10}}
    {...props}
  >
    <Text style={{fontSize: 16, color: '#fff'}}>Listo</Text>
  </TouchableOpacity>

)


function OnboardingScreen({ navigation }) {

  const disableBackButton = () => {
    BackHandler.exitApp()
    return true
  }

  // componentDidMount
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', disableBackButton)
    
    // componentWillUnmount
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }
  },[])

  return(
    <Onboarding
      // NextButtonComponent={Next}
      // SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      nextLabel='Siguiente'
      skipLabel='Saltar'
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#7cb342',
          image: <Onboarding1 height={200} width={200}/>,
          title: 'DogoFinder, al rescate',
          subtitle: 'Almacenamos la información de tu canino en la nube.'
        },
        {
          backgroundColor: '#ef6c00',
          image: <Onboarding2 height={200} width={200}/>,
          title: 'Reduce el riesgo de que tu pequeñ@ se pierda',
          subtitle: 'Genera el código QR y adhiéreselo a su collarín.'
        },
        {
          backgroundColor: '#00796b',
          image: <Onboarding3 height={200} width={200}/>,
          title: '¡No dejes que se vaya lejos!',
          subtitle: 'Un perro sin su amo en el exterior corre muchos riesgos.'
        },
      ]}
    />
  )
}


export default OnboardingScreen