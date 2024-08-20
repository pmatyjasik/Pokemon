"use client";

import { Box, Button, Select, MenuItem } from "@mui/material";
import { DateTypography } from "@/components/DateTypography/DateTypography";
import { InputController } from "@/components/TrainerForm/InputController/InputController";

export const TrainerForm = () => {
    return (
        <Box display='flex' flexDirection='column' gap={6}>
            <DateTypography date='Wednesday, 06.03.2024' />
            <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={6}>
                <InputController label="Trainer's name" />
                <InputController label="Trainer's age" />
            </Box>
            <Select displayEmpty fullWidth sx={{ mb: 2 }}>
                <MenuItem value=''>
                    <em>Choose</em>
                </MenuItem>
                <MenuItem value='Pikachu'>Pikachu</MenuItem>
                <MenuItem value='Charmander'>Charmander</MenuItem>
                <MenuItem value='Bulbasaur'>Bulbasaur</MenuItem>
            </Select>
            <Box
                sx={{
                    mb: 2,
                    minHeight: 100,
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    textAlign: "center",
                    padding: 2,
                }}
            >
                Test
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Button variant='contained' color='secondary'>
                    Reset
                </Button>
                <Button variant='contained' color='primary' type='submit'>
                    Submit
                </Button>
            </Box>
        </Box>
    );
};
