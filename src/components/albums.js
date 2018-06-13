import React from 'react';

export class Albums extends React.Component {
	render() {
		const {
			link,
			imageSrc,
			imageAlt,
			imageAria,
			title,
			description
		} = this.props;
		return (
			<div className="albums small-card">
				<Link to={link}>
					{/* I think `aria` might not be the right attribute here, but I'm not 100% sure */}
					<img
						className="image"
						src={imageSrc}
						alt={imageAlt}
						aria={imageAria}
					/>
				</Link>

				<div className="details">
					<h2>{title}</h2>
					<p>{description}}</p>
				</div>
			</div>
		);
	}
}
