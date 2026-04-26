import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.multioutput import MultiOutputClassifier
from sklearn.ensemble import RandomForestClassifier

import pickle

# STEP 1: Load your expanded dataset
file_path = "skin_tone_colors_complete.csv"  # <-- Your CSV file
skin_data = pd.read_csv(file_path)

# STEP 2: Expand dataset (optional if needed)


# STEP 3: Preprocess the dat/
skin_tone_encoder = LabelEncoder()
undertone_encoder = LabelEncoder()

skin_data['Skin Tone Encoded'] = skin_tone_encoder.fit_transform(skin_data['Skin Tone'])
skin_data['Pigment Undertone Encoded'] = undertone_encoder.fit_transform(skin_data['Pigment Undertone'])

X = skin_data[['Skin Tone Encoded', 'Pigment Undertone Encoded']]

clothing_encoder = LabelEncoder()
makeup_encoder = LabelEncoder()
accessories_encoder = LabelEncoder()
avoid_colors_encoder = LabelEncoder()

y_clothing = clothing_encoder.fit_transform(skin_data['Complementary Colors (Clothing)'])
y_makeup = makeup_encoder.fit_transform(skin_data['Complementary Colors (Makeup)'])
y_accessories = accessories_encoder.fit_transform(skin_data['Complementary Colors (Accessories)'])
y_avoid = avoid_colors_encoder.fit_transform(skin_data['Colors to Avoid (Clothing)'])

Y = np.column_stack([y_clothing, y_makeup, y_accessories, y_avoid])

# STEP 4: Train/Test Split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# STEP 5: Train Multi-Output Random Forest Model
base_model = RandomForestClassifier(n_estimators=150, random_state=42)
multi_output_model = MultiOutputClassifier(base_model)

multi_output_model.fit(X_train, Y_train)

# STEP 6: Save the model + encoders
model_bundle = {
    'model': multi_output_model,
    'skin_tone_encoder': skin_tone_encoder,
    'undertone_encoder': undertone_encoder,
    'clothing_encoder': clothing_encoder,
    'makeup_encoder': makeup_encoder,
    'accessories_encoder': accessories_encoder,
    'avoid_colors_encoder': avoid_colors_encoder
}

with open('Skincolor/skin_color_recommendation_model.pkl', 'wb') as f:

    pickle.dump(model_bundle, f)

print("\u2705 Model and encoders saved as 'skin_color_recommendation_model.pkl'!")
