import styled from "@emotion/styled";
import { Dialog, DialogContent, Button, Typography, Box } from "@mui/material";

const StyledDialog = styled(Dialog)(({ theme }) => ({
    boxShadow: theme.shadows[2],
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    padding: theme.spacing(8, 30, 8, 30),
}));

const SuccessMessage = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.black,
    fontSize: theme.spacing(10),
}));

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <StyledDialog open={isOpen} onClose={onClose}>
            <StyledDialogContent>
                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={8}>
                    <SuccessMessage variant='subtitle2' size='lg'>
                        Success
                    </SuccessMessage>
                    <Button onClick={onClose} color='primary' variant='contained'>
                        Reset form
                    </Button>
                </Box>
            </StyledDialogContent>
        </StyledDialog>
    );
};
