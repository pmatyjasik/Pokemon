"use client";

import { Box, Button } from "@mui/material";
import { DateTypography } from "@/components/DateTypography/DateTypography";
import { InputController } from "@/components/TrainerForm/InputController/InputController";
import { ComboBoxController } from "@/components/TrainerForm/ComboBoxController/ComboBoxController";
import { useState } from "react";

export const TrainerForm = () => {
    const [value, setValue] = useState("");
    return (
        <Box display='flex' flexDirection='column' gap={4}>
            <DateTypography date='Wednesday, 06.03.2024' />
            <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={6}>
                <InputController label="Trainer's name" />
                <InputController label="Trainer's age" />
            </Box>
            <ComboBoxController
                label='Pokemon name'
                placeholder='Choose'
                comboBoxProps={{
                    options: ["a", "b", "c", "d", "e"],
                    value,
                    onChange: setValue,
                    loading: false,
                }}
            />
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
