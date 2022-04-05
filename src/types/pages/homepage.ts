export interface SelectedType {
    value: string
    label: string
}

export const classificationOptions: SelectedType[] = [
    { value: 'FH', label: 'Peixe' },
    { value: 'RP', label: 'Réptil' },
    { value: 'AP', label: 'Amfíbio' },
    { value: 'BD', label: 'Pássaro' },
    { value: 'MA', label: 'Mamífero' },
]

export type LocationType = { lat: number, lng: number }
export const defaultLocationBase: LocationType = { lat: -10, lng: -55 }