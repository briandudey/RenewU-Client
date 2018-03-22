import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';

export default class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="album">
						<div className="lp-header">
							<h1>Welcome to Renew-U</h1>
							<p>
								Jump right into your first meditation (meditate) or chose to
								begin a guided exploration into the world of meditation (watch).
							</p>
						</div>
						<div className="albums meditate-c">
							<Link to="/meditation">
								<img
									className="image"
									src="http://authentictantra.com/wp-content/uploads/2016/03/Buddha-silhouette-in-lotus-pose.jpg"
									alt="silhouette of person meditating click to go to meditation page"
								/>
							</Link>
							<div className="details meditate-d">
								<h1>MEDITATE</h1>
								<p>
									Go here at any time throughout your journey to practice what
									you have learned or improve on what you already know.
								</p>
							</div>
						</div>

						<div className="albums small-card">
							<Link to="/watch">
								<img
									className="image"
									src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/cc/85/7b/cc857bb1-ea03-e6e1-0066-82b31f9768fa/mzl.dktrsbia.png/600x600bf.jpg"
									alt="silhouette of Buddha meditating"
									aria="click to go to meditation page"
								/>
							</Link>

							<div className="details">
								<h2>WATCH</h2>
								<p>
									Begin your meditation journey here - explore the fascinating
									and complex world of meditation - earn badges as you progress
									through each unique video.
								</p>
							</div>
						</div>
						<div className="albums small-card">
							<img
								className="image"
								src="http://artsandscience.usask.ca/news/thumb/1690.jpg"
								alt="silhouette of person meditating click here to watch videos about meditation"
								aria="click to go to meditation page"
							/>
							<div className="details">
								<h2>Read</h2>
								<p>
									Take a deeper dive into the world of meditation with texts
									both old and new.
									<p>(COMING SOON)</p>
								</p>
							</div>
						</div>
						<div className="albums small-card">
							<img
								className="image"
								src="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/11/5e/44/115e445b-35f6-c99d-c1fa-7e18b8a36d83/mzl.clvdmnji.png/600x600bf.jpg"
								alt="silhouette of Buddha meditating"
							/>
							<div className="details">
								<h2>Karma</h2>
								<p>
									Use your karma points to send messages of support to those
									sharing this meditation journey with you.
								</p>
								<p>(COMING SOON)</p>
							</div>
						</div>
						<div className="albums small-card">
							<img
								className="image"
								src="http://cdn.shopify.com/s/files/1/0969/9128/products/Graphic_20Art_20-_20Lotus_20Buddha_15680849-f0ee-4f95-bbac-4bff948524cb_grande.jpg?v=1481894802"
								alt="silhouette of person meditating"
							/>
							<div className="details">
								<h2>GRATITUDE</h2>
								<p>Your gratitude journal.</p>
								<p>(COMING SOON)</p>
							</div>
						</div>
					</div>
				</div>
				<div class="social-container">
					<header>
						<h1>Join The Meditation Community</h1>
						<ul class="accordian">
							<li class="tab">
								<div class="social youtube">
									<a
										href="https://www.youtube.com/channel/UCNkATUf-b99WpSOQQkdZzDg"
										target="_blank"
										rel="noopener noreferrer">
										YouTube
									</a>
								</div>
								<div class="content">
									<h1>YouTube</h1>
									<p>
										Discover even more lessons on meditation with acclaimed
										teacher Paul Miller.
									</p>
								</div>
							</li>
							<li class="tab">
								<div class="social twitter">
									<a
										href="https://twitter.com/BrianDudey"
										target="_blank"
										rel="noopener noreferrer">
										Twitter
									</a>
								</div>
								<div class="content">
									<h1>Twitter</h1>
									<p>Join the creater of Renew-U in the Twitterverse</p>
								</div>
							</li>
							<li class="tab">
								<div class="social facebook">
									<a
										href="www.facebook.com"
										target="_blank"
										rel="noopener noreferrer">
										facebook
									</a>
								</div>
								<div class="content">
									<h1>Facebook</h1>
									<p>Find your local meditation community.</p>
								</div>
							</li>
							<li class="tab">
								<div class="social linkedin">
									<a
										href="https://www.linkedin.com/in/brianraydudey/"
										target="_blank"
										rel="noopener noreferrer">
										LinkedIn
									</a>
								</div>
								<div class="content">
									<h1>LinkedIn</h1>
									<p>Connect with the creator of Renew-U on LinkedIn.</p>
								</div>
							</li>
							<li class="tab">
								<div class="social instagram">
									<a
										href="www.instagram.com"
										target="_blank"
										rel="noopener noreferrer">
										Instagram
									</a>
								</div>
								<div class="content">
									<h1>Instagram</h1>
									<p>
										Feed your soul with pictures of meditation from around the
										world.
									</p>
								</div>
							</li>
							<li class="tab">
								<div class="social github">
									<a
										href="https://github.com/briandudey"
										target="_blank"
										rel="noopener noreferrer">
										GitHub
									</a>
								</div>
								<div class="content">
									<h1>GitHub</h1>
									<p>Check out the code of Renew-U, an open-source project</p>
								</div>
							</li>
						</ul>
					</header>
				</div>
				<footer>
					RenewU is an open source project designed by Brian Dudey (2018)
				</footer>
			</div>
		);
	}
}
