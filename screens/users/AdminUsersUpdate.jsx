import { Avatar, Box, Button, Center, Radio, ScrollView, Text, VStack } from "native-base"
import { useUserStore } from "../../store"
import { useFormik } from "formik"
import { Alert } from "react-native"

export const AdminUsersUpdate = ({ navigation }) => {
    const selectedUser = useUserStore(state => state.selectedUser)
    const changeUserRole = useUserStore(state => state.changeUserRole)

    const formik = useFormik({
        initialValues: {
            rol: ''
        },
        onSubmit: async (values) => {
            if (values.rol === '') {
                navigation.goBack()
            } else {
                const status = await changeUserRole(selectedUser.id, values.rol)
                Alert.alert(status.message)
                navigation.goBack()
            }
        }
    })

    return (
        <ScrollView>
            <Center>
                <Avatar
                    bg="green.500"
                    size="2xl"
                    mt={50} mb={5}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/111304665?v=4"
                    }} />
                <Text fontSize="xl" fontWeight="bold" mb={2}>@{selectedUser.nombre}</Text>
                <Button bg="muted.500" onPress={() => formik.handleSubmit()}>Actualizar</Button>
            </Center>
            <VStack space={3} ml={5} mr={5}>
                <Box>
                    <Text fontWeight="bold">Nombres</Text>
                    <Text>{selectedUser.nombre}</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Correo</Text>
                    <Text>test@gmail.com</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Institución</Text>
                    <Text>Intituto Nacional de Defensa Civil</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Permisos</Text>
                    <Radio.Group value={formik.rol} onChange={formik.handleChange('rol')}>
                        <Radio shadow={2} value="admin" my="2">
                            Administrador
                        </Radio>
                        <Radio shadow={2} value="user" my="2">
                            Usuario Privilegiado
                        </Radio>
                    </Radio.Group>
                </Box>
            </VStack>
        </ScrollView>
    )
}