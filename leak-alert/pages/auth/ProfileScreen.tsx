import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ProfileScreen: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        street: '',
        bio: '',
    });

    const handleInputChange = (field: keyof typeof formData, value: string) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <View className="flex-1 bg-white px-6 py-8">
            {/* Header */}
            <Text className="text-blue-500 text-lg font-semibold mb-4">Your profile</Text>
            <Text className="text-gray-500 text-sm mb-6">
                This information helps people recognize you
            </Text>

            {/* Input Fields */}
            <View className="space-y-4">
                <View>
                    <Text className="text-gray-400 text-sm">Name</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="John Doe"
                        value={formData.name}
                        onChangeText={(text) => handleInputChange('name', text)}
                    />
                </View>

                <View>
                    <Text className="text-gray-400 text-sm">City</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="Central City"
                        value={formData.city}
                        onChangeText={(text) => handleInputChange('city', text)}
                    />
                </View>

                <View>
                    <Text className="text-gray-400 text-sm">Street</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="14th Street"
                        value={formData.street}
                        onChangeText={(text) => handleInputChange('street', text)}
                    />
                </View>

                <View>
                    <Text className="text-gray-400 text-sm">Bio</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
                        placeholder="Works, services..."
                        value={formData.bio}
                        onChangeText={(text) => handleInputChange('bio', text)}
                        multiline
                    />
                </View>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
                className="bg-teal-600 rounded-lg py-4 mt-6"
                onPress={handleSubmit}
            >
                <Text className="text-center text-white font-semibold">Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
