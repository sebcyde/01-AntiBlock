import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore';
import LoadingScreen from '../Loading/LoadingScreen';

type Props = {};

const Initial = (props: Props) => {
	const [CurrentSlide, setCurrentSlide] = useState<number>(0);
	const [UserData, setUserData] = useState({});
	const OccupationRef = useRef(null);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const [snapshot, loading, error] = useDocument(doc(db, `Users/${user?.uid}`));

	useEffect(() => {
		if (snapshot?.data()?.initialised) navigate('/');
	}, [snapshot]);

	const NextSlide = () => {
		setCurrentSlide((prev) => prev + 1);
	};

	const PrevSlide = () => {
		setCurrentSlide((prev) => prev - 1);
	};

	const Progress = async () => {
		const UserRef = doc(db, `Users/${user?.uid}`);
		await updateDoc(UserRef, { initialised: true });
		if (snapshot?.data()?.initialised) navigate('/');
	};

	const SlideZero = () => {
		return (
			<div className="Slide0">
				<h1>Welcome to AntiBlock</h1>
				<h2>The AI Generative Idea Generating App</h2>
				<p>
					Since it's your first time here, why don't we get to know each other a
					bit better?
				</p>
				<p>We'll ask you a few questions to help tailor your experience.</p>
			</div>
		);
	};

	const SlideOne = () => {
		return (
			<div className="Slide1">
				<p>What do you do?</p>
				<span>
					<p>I am a:</p>
					<input ref={OccupationRef} />
				</span>
			</div>
		);
	};

	const SlideTwo = () => {
		return (
			<div className="Slide2">
				<h1>Welcome to AntiBlock</h1>
				<h2>The anti idea blocking app</h2>
				<p>
					Since it's your first time here, why don't we get to know each other a
					bit better?
				</p>
			</div>
		);
	};

	const SlideThree = () => {
		return (
			<div className="Slide2">
				<h1>Thank You!</h1>
				<h2>You're all set up</h2>
				<p>
					Press next to progress. Settings can be edited in the Settings page.
				</p>
			</div>
		);
	};

	const Slides = [<SlideZero />, <SlideOne />, <SlideTwo />, <SlideThree />];

	return (
		<div className="InitalPage">
			{loading ? (
				<LoadingScreen />
			) : (
				<>
					<div className="SlideContainer">{Slides[CurrentSlide]}</div>

					<div className="NavigationButtonContainer">
						{CurrentSlide != 0 ? (
							<button className="PrevButton" onClick={PrevSlide}>
								Previous
							</button>
						) : (
							''
						)}
						{CurrentSlide != Slides.length ? (
							<button
								className="NextButton"
								onClick={() => {
									if (CurrentSlide != Slides.length - 1) {
										NextSlide();
									} else {
										Progress();
									}
								}}
							>
								Next
							</button>
						) : (
							''
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default Initial;
