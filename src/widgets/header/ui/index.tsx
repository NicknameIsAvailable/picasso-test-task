import {Box, IconButton, Sheet} from "@mui/joy";

const Header = () => {
    return (
        <Sheet
            variant="solid"
            invertedColors
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                p: 2,
                borderRadius: { xs: 0, sm: 'sm' },
                minWidth: 'min-content',
            }}
        >
            <IconButton
                variant="soft"
                size="sm"
                sx={{ borderRadius: '50%' }}
            >
            </IconButton>
            <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
                Тестовое задание для Пикассо
            </Box>
        </Sheet>
    );
};

export default Header;