import { Box, Button } from "@mui/material";

interface ActionButtonsProps {
    onReset: () => void;
}

export const ActionButtons = ({ onReset }: ActionButtonsProps) => (
    <Box display='flex' justifyContent='flex-end' gap={4} width='100%'>
        <Button variant='contained' color='info' onClick={onReset}>
            Reset
        </Button>
        <Button variant='contained' color='primary' type='submit'>
            Submit
        </Button>
    </Box>
);
