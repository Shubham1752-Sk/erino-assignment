import { Box } from "@mui/material"

type Navitem = {
    name: string
    path: string
}

const navItems = [
    {
        name: 'Contact Form',
        path: '/',
    },
    {
        name: 'View Contact',
        path: '/view-contact',
    },
]

const NavItem: React.FC<Navitem> = (({name, path}) => {
    return (
        <Box
            sx={{
                fontWeight: '500',
                fontSize: '16px',
                py: '5px',
                px: '15px',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                '&:hover': {
                    scale: '1.1',
                    bgcolor: '#4a4d4f',
                    textDecoration: 'underline',
                    color: 'blue',
                },
            }}
            onClick={() => {
                window.location.href = path
            }}
        >
            {name}
        </Box>
    )
})

const Navbar = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontWeight: '500',
                fontSize: '16px',
                padding: '20px 30px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {
                navItems.map((item, index) => {
                    return (
                        <NavItem key={index} name={item.name} path={item.path} />
                    )
                })
            }
        </Box>
    )
}

export default Navbar
