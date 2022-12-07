import React from 'react'
import HeaderHome from '../Components/HeaderHome'
import FooterHome from '../Components/FooterHome'
import { Outlet } from 'react-router-dom'

export default function HomeTemplates() {
	return (
		<div>
			<HeaderHome />

			<div style={{ minHeight: 700 }}>
				<Outlet></Outlet>
			</div>

			<FooterHome />
		</div>
	)
}
