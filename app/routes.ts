import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx'),
    layout('routes/admin/admin-layout.tsx', [
        route('dashboard', 'routes/admin/dashboard.tsx'),
    ]),
    layout('routes/root/root-layout.tsx', [
        index('routes/root/index.tsx'),
    ])
] satisfies RouteConfig;
