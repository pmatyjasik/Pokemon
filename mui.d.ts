import { ChipPropsVariantOverrides } from "@mui/material/Chip";

declare module "@mui/material/Chip" {
    interface ChipPropsVariantOverrides {
        pokemonType: true;
    }
}
