import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from '@nextui-org/react';
import Link from 'next/link';

export default function ModalDefault() {
  const {isOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Modal size={'xs'} defaultOpen={true} hideCloseButton={true} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-center'>No Summoner Found</ModalHeader>
              <ModalBody className='text-center'>
                <p> 
                  Please select a summoner from the search page below
                </p>
              </ModalBody>
              <ModalFooter className='flex flex-col text-center'>
                <Link href={'/'}>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Go to Summoner Search
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
