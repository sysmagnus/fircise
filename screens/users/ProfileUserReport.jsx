import { Avatar, Box, Button, Center, HStack, Text, VStack } from "native-base"
import { View } from "react-native"

export const ProfileUserReport = () => {
    return (
        <View>
            <Center>
                <Avatar
                    bg="green.500"
                    size="2xl"
                    mt={50} mb={5}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/111304665?v=4"
                    }} />
                <Text fontSize="xl" fontWeight="bold">@Henry</Text>
                <HStack space={3} mt={2} mb={2}>
                    <Button bg="secondary.700" onPress={() => console.log("hello world")}>Mis Reportes</Button>
                    <Button bg="muted.500" onPress={() => console.log("hello world")}>Actualizar</Button>
                </HStack>
            </Center>
            <VStack space={3} ml={5} mr={5}>
                <Box rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
                    <Text>Hola</Text>
                </Box>
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
                    <Text>Contenido del card</Text>
                </Box>
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
                    <Text>Contenido del card</Text>
                </Box>
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
                    <Text>Contenido del card</Text>
                </Box>

            </VStack>
        </View>
    )
}
