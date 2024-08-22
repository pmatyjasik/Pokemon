"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box } from "@mui/material";
import { DateTypography } from "@/components/DateTypography/DateTypography";
import { InputController } from "@/components/TrainerForm/InputController/InputController";
import { ComboBoxController } from "./ComboBoxController/ComboBoxController";
import { useCallback } from "react";
import { Modal } from "@/components/TrainerForm/Modal/Modal";
import { ActionButtons } from "./ActionButtons/ActionButtons";
import { useGetPokemons } from "@/hooks/useGetPokemons/useGetPokemons";
import { useModal } from "@/hooks/useModal/useModal";
import { usePokemonDetails } from "@/hooks/usePokemonDetails/usePokemonDetails";
import { Preview } from "./Preview/Preview";

const formSchema = z.object({
    trainerName: z
        .string({ message: "Field is required" })
        .min(2, "At least 2 characters long")
        .max(20, "Smaller than 20 characters"),
    trainerAge: z.coerce
        .number({ message: "Field is required" })
        .min(16, "At least 16 years old")
        .max(99, "Smaller than 99 years old"),
    pokemonName: z.string().min(1, "Pokemon name is required"),
});

type FormData = z.infer<typeof formSchema>;

interface TrainerFormProps {
    currentDate: string;
}

export const TrainerForm = ({ currentDate }: TrainerFormProps) => {
    const { pokemonOptions, setSearchTerm, isLoading } = useGetPokemons();
    const { pokemon, isLoading: isPokemonLoading, setPokemonName } = usePokemonDetails();
    const { isModalOpen, openModal, closeModal } = useModal();

    const { control, handleSubmit, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            trainerName: "",
            trainerAge: 0,
            pokemonName: "",
        },
    });

    const resetForm = useCallback(() => {
        reset();
        setPokemonName(null);
        setSearchTerm(null);
    }, [reset, setSearchTerm, setPokemonName]);

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(openModal)} display='flex' flexDirection='column' gap={6}>
                <DateTypography date={currentDate} />
                <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={6}>
                    <Controller
                        name='trainerName'
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <InputController
                                label="Trainer's name"
                                error={error?.message}
                                inputProps={{ ...field, type: "input" }}
                            />
                        )}
                    />
                    <Controller
                        name='trainerAge'
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <InputController
                                label="Trainer's age"
                                error={error?.message}
                                inputProps={{
                                    ...field,
                                    value: field.value === 0 ? "" : field.value,
                                    type: "string",
                                }}
                            />
                        )}
                    />
                </Box>
                <Controller
                    name='pokemonName'
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <ComboBoxController<string | null>
                            label='Pokemon name'
                            placeholder='Choose a Pokemon'
                            error={error?.message}
                            comboBoxProps={{
                                options: pokemonOptions?.map(({ name }) => name) || [],
                                disablePortal: true,
                                loading: isLoading,
                                //@ts-ignore
                                value: field.value || null,
                                onChange: (_, newValue) => {
                                    field.onChange(newValue ? newValue : null);
                                    if (newValue) {
                                        setPokemonName(newValue);
                                    }
                                },
                                onInputChange: (_, value) => {
                                    setSearchTerm(value);
                                },
                                autoComplete: true,
                                isOptionEqualToValue: (option, value) => option === value,
                            }}
                        />
                    )}
                />
                <Preview pokemon={pokemon} isLoading={isPokemonLoading} />
                <ActionButtons onReset={resetForm} />
            </Box>
            <Modal isOpen={isModalOpen} onClose={() => closeModal(resetForm)} />
        </>
    );
};
