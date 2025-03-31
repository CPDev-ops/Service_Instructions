import { QueryResult } from "@/types/type";

//CAMPAÑAS
export const Campaigns: QueryResult = {
    code: '4dcb27e3-cb9b-48d1-b63c-1f3dc3a3c817',//codigo del tango q suministra(ornella en este caso)
    title: 'Sistema de Campañas',//titulo para cada app en el navbar
    titleCode: 'Campañas',//titulo x por si no printea el html del public
    source: './html/Campaign.html'//lugar en la carpeta public,
}

//GUARDARROPAS
export const GoatCheck: QueryResult = {
    code: '1b191040-2589-4271-800f-1fc60b99b828',//codigo del tango q suministra(ornella en este caso)
    title: 'Sistema de Guardarropas',//titulo para cada app en el navbar
    titleCode: 'Guardarropas',//titulo x por si no printea el html del public
    source: './html/GoatCheck.html'//lugar en la carpeta public
}

//AFFILIATE
export const Affiliate: QueryResult = {
    code: '',
    title: 'Sistema de Affiliate',
    titleCode: 'Affiliate',
    source: "./html/Affiliate.html"
}

//OTRAS APP CON ESA ETRUCTURA
export const test: QueryResult = {
    code: '',
    source: '',
    title: '',
    titleCode: ''
}

//functions
const QUERY_VALUES_MAP: Record<string, QueryResult> = {
    campanas: Campaigns,
    guardarropas: GoatCheck,
    affiliate: Affiliate
};

//parseamos la data
export function parseQueryToBody(queryValue: string | null): QueryResult {

    if (!queryValue || !QUERY_VALUES_MAP[queryValue]) {
        // Retorna un valor por defecto si el parámetro no coincide
        return {
            title: 'Default Title',
            code: 'Default Code',
            titleCode: 'Default Title Code',
            source: 'none'
        };
    }

    // Retorna el objeto correspondiente del mapeo
    return QUERY_VALUES_MAP[queryValue];

}
