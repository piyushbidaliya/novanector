import React, { useState } from 'react';

const Setting = () => {
    const [activeTab, setActiveTab] = useState("setting");

    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold mt-5">Setting</h1>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mt-6  pb-2">
                {['Profile', 'Password', 'Social Link'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm sm:text-base ${
                            activeTab === tab
                                ? 'border-b-2 border-blue-500 text-black font-semibold'
                                : 'text-gray-600'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'Profile' && (
                <form className="space-y-6 max-w-3xl w-full mx-auto mt-6 px-4">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" placeholder="Jon" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" placeholder="Done" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="username">User Name</label>
                            <input id="username" type="text" placeholder="Jondone01" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" type="text" placeholder="Jonedon01" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="occupation">Skill/Occupation</label>
                            <input id="occupation" type="text" placeholder="Jonedone01" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="displayName">Display Name Publicly As</label>
                            <input id="displayName" type="text" placeholder="Jon Doe" className="border border-gray-400 rounded-md p-1 w-full mt-1" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <input id="bio" placeholder="Add your Quary" className="w-full border border-gray-400 rounded-md p-2 mt-1" rows={4} />
                    </div>

                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md">
                        Update Information
                    </button>
                </form>
            )}

            {/* Password Tab */}
            {activeTab === 'Password' && (
                <form className="space-y-6 max-w-3xl w-full mx-auto mt-6 px-4">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input id="currentPassword" type="password" placeholder="********" className="border border-gray-400 w-full rounded-md p-1 mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="newPassword">New Password</label>
                            <input id="newPassword" type="password" placeholder="********" className="border border-gray-400 w-full rounded-md p-2 mt-1" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Re-Enter Password</label>
                        <input id="confirmPassword" type="password" placeholder="********" className="border border-gray-400 p-1 rounded-md mt-1 w-full" />
                    </div>

                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-4 rounded-md">
                        Update Password
                    </button>
                </form>
            )}

            {/* Social Link  */}
            {activeTab === 'Social Link' && (
                <form className="space-y-6 max-w-3xl w-full mx-auto mt-6 px-4">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="facebook">Facebook</label>
                            <input id="facebook" type="url" placeholder="https://facebook.com/" className="w-full border border-gray-400 rounded-md p-1 mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="instagram">Instagram</label>
                            <input id="instagram" type="url" placeholder="https://instagram.com/" className="w-full border border-gray-400 rounded-md p-1 mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="twitter">Twitter</label>
                            <input id="twitter" type="url" placeholder="https://twitter.com/" className="w-full border border-gray-400 rounded-md p-2 mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input id="linkedin" type="url" placeholder="https://linkedin.com/" className="w-full border border-gray-400 rounded-md p-1 mt-1" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label htmlFor="website">Website/Portfolio</label>
                            <input id="website" type="url" placeholder="https://website.com/" className="w-full border border-gray-400 rounded-md p-1 mt-1" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="github">GitHub</label>
                            <input id="github" type="url" placeholder="https://github.com/" className="w-full border border-gray-400 rounded-md p-1 mt-1" />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Setting;
