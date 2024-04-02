import { Center, Heading, Image, Text } from "native-base"
import { useEffect, useState } from "react"
import { ScrollView } from "react-native"

export const AlertasAdminEnviada = ({ navigation }) => {
    const [count, setCount] = useState(3)

    const handlerNotificar = () => {

        navigation.navigate('HomeUser')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(count - 1)
            } else {
                handlerNotificar()
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [count])

    return (
        <ScrollView>
            <Center mt={150}>
                <Text mb={10}>Regresando en {count} segundos</Text>
                <Heading mb={10}>Alerta Enviada</Heading>
                <Image width={200} height={200}
                    mb={2}
                    source={require('../../assets/bell-electric.png')} />
                <Text textAlign="center" mb={2}>
                    Pronto se notificara al cuerpo de bomberos mas cernano.
                </Text>
            </Center>
        </ScrollView>
    )
}