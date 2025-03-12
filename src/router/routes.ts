export const routes = {
    home: "/",
    dashboard: (id: string = ":id") => `/dashboard/${id}`
}