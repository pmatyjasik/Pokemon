import { Pokemon } from "@/models/pokemon";
import { Box, Chip, CircularProgress, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export interface PreviewProps {
    pokemon: Pokemon | null;
    isLoading: boolean;
}

export const Preview = ({ pokemon, isLoading }: PreviewProps) => {
    const { spacing, palette } = useTheme();

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height={spacing(50)}
            width='100%'
            border={1}
            borderColor={palette.grey[400]}
        >
            {isLoading ? (
                <CircularProgress />
            ) : pokemon ? (
                <Box display='flex' gap={6} justifyContent='center' alignItems='center'>
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={160} height={160} />
                    <Box display='flex' flexDirection='column' gap={2}>
                        <Typography variant='subtitle2'>Name: {pokemon.name}</Typography>
                        <Typography variant='subtitle2'>
                            Types:{" "}
                            {pokemon.types.map(({ type }, index) => (
                                <Chip key={index} label={type.name} variant='pokemonType' sx={{ mr: 1, mb: 1 }} />
                            ))}
                        </Typography>
                        <Typography variant='subtitle2'>Base experience: {pokemon.base_experience}</Typography>
                        <Typography variant='subtitle2'>ID: {pokemon.id}</Typography>
                    </Box>
                </Box>
            ) : (
                <Typography variant='subtitle2' color={palette.grey[200]}>
                    Your pokemon
                </Typography>
            )}
        </Box>
    );
};
