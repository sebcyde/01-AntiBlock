import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Button color="inherit" href="/" className="navbutton">
						Home
					</Button>
					<Button color="inherit" href="/create" className="navbutton">
						Create
					</Button>

					<Button color="inherit" href="/ideas" className="navbutton">
						Ideas
					</Button>

					{/* <Button color="inherit" href="/create" className="navbutton">
						Collaborate
					</Button> */}

					<Button color="inherit" href="/exercises" className="navbutton">
						Exercises
					</Button>

					{/* <Button color="inherit" href="/progress" className="navbutton">
						My Progress
					</Button> */}

					{/* <Button color="inherit" href="/resources" className="navbutton">
						Resources
					</Button> */}

					<Button color="inherit" href="/settings" className="navbutton">
						Settings
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
