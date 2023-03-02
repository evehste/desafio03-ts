import { Box, Text } from "@chakra-ui/react";

interface ICardInfo{
    mainContent: string
    content: string
}

const CardInfo = ({mainContent, content}: ICardInfo) => {
    return (
        <Box backgroundColor="#fff" borderRadius="2px" padding="3%" minHeight="27vh" width="100%">
            <Text fontSize="2xl" fontWeight="bold">{mainContent}</Text>
            <Text fontSize="xl">{content}</Text>
        </Box>
    )
}

export default CardInfo;