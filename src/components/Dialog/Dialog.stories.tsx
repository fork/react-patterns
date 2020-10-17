/* eslint-disable react/display-name */
import React, { useState } from 'react';

import Dialog, { DialogBody, DialogClose, DialogHeader, DialogFooter } from './Dialog';

import Button from '../Button';
import Text from '../Text';
import Radio from '../Radio';
import Row from '../Row';

type DialogSize = 'narrow' | 'default' | 'wide' | 'full';

export default {
  title: 'Components/Dialog',
  component: Dialog
};

export const Story: React.FC = () => {
  const [size, setSize] = useState<DialogSize>('default');

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>open modal</Button>
      {visible && (
        <>
          <Dialog size={size} onClose={() => setVisible(false)}>
            <DialogHeader>
              <Text as="h2">Header</Text>

              <DialogClose />
            </DialogHeader>

            <DialogBody>
              <Radio
                id="dialogSize"
                label="Dialog Size"
                value={size}
                onChange={e => setSize(e.target.value as DialogSize)}
                options={[
                  { value: 'full', label: 'full' },
                  { value: 'wide', label: 'wide' },
                  { value: 'default', label: 'default' },
                  { value: 'narrow', label: 'narrow' }
                ]}
              />
            </DialogBody>

            <DialogFooter justifyContent="flex-end">
              <Row gap="s">
                <Button variant="secondary" onClick={() => setVisible(false)}>
                  Cancel
                </Button>

                <Button onClick={() => setVisible(false)}>Accept</Button>
              </Row>
            </DialogFooter>
          </Dialog>
        </>
      )}
    </>
  );
};
