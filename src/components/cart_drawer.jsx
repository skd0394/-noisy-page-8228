import { Image, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react"

function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Image onClick={onOpen} id='bag' src="data:image/png;base64,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" />
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Your's Cart</DrawerHeader>
                    <DrawerBody>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartDrawer