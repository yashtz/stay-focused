import React from 'react';

const Home = () => {
  return (
    <div className="flex">
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-purple-700 text-white p-8">
        <h1 className="text-4xl font-sans font-bold mb-4 text-center">StayFocused</h1>
        <h2 className="text-3xl font-roboto font-bold mb-4 text-center">“Nurturing Potential, Empowering Futures”</h2>
        <p className="text-lg mb-8 mx-36 max-md:mx-12 font-roboto text-center">Welcome to StayFocused: Your ADHD-Friendly Study Companion – a revolutionary online platform designed to empower students with ADHD on their academic journey. We understand the unique challenges that ADHD students face when it comes to studying and staying organised. That's why we've created a comprehensive suite of tools and features tailored to enhance your learning experience, boost productivity, and make studying more efficient and enjoyable. From text-to-speech and important points summarisation to flashcard creation, time management tools, and even a friendly chatbot for instant support, StayFocused is here to help you thrive academically. Join us in transforming the way you learn, making studying not just manageable, but truly rewarding. Let's embark on your path to success together!</p>
      </div>
    </div>
  );
}

export default Home;