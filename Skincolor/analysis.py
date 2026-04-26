import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import pickle
import numpy as np
import cv2

# --- Load model and encoders ---
with open('Skincolor/skin_color_recommendation_model.pkl', 'rb') as f:
    model_bundle = pickle.load(f)

model = model_bundle['model']
skin_tone_encoder = model_bundle['skin_tone_encoder']
undertone_encoder = model_bundle['undertone_encoder']
clothing_encoder = model_bundle['clothing_encoder']
makeup_encoder = model_bundle['makeup_encoder']
accessories_encoder = model_bundle['accessories_encoder']
avoid_colors_encoder = model_bundle['avoid_colors_encoder']

# --- Complete color name to hex mapping ---
color_hex_map = {
    "Acid Green": "#2E8B57",
    "Amber": "#FFBF00",
    "Amethyst Purple": "#9966CC",
    "Antique Gold Jewelry": "#D4AF37",
    "Apricot": "#FBCEB1",
    "Apricot Blush": "#FDD5B1",
    "Baby Blue": "#87CEEB",
    "Baby Lavender": "#E6E6FA",
    "Baby Pink": "#FFC0CB",
    "Baby Yellow": "#FFFF00",
    "Blush Pink": "#FFB6C1",
    "Brass Jewelry": "#B5A642",
    "Brick Brown": "#A52A2A",
    "Brick Copper": "#CB6D51",
    "Brick Orange": "#FF8C00",
    "Brick Red": "#8B0000",
    "Brick Red Lipstick": "#8B0000",
    "Bright Aqua": "#00FFFF",
    "Bright Blue": "#ADD8E6",
    "Bright Cobalt": "#F08080",
    "Bright Coral": "#F08080",
    "Bright Neon": "#39FF14",
    "Bright Neon Blue": "#ADD8E6",
    "Bright Plum": "#DDA0DD",
    "Bright Purple": "#800080",
    "Bright Red": "#D3D3D3",
    "Bright Rust": "#B7410E",
    "Bright Yellow": "#FFFFE0",
    "Bronze": "#A52A2A",
    "Bronze Eyeshadow": "#CD7F32",
    "Bronze Jewelry": "#CD7F32",
    "Brushed Bronze Jewelry": "#B08D57",
    "Brushed Gold Jewelry": "#D4AF37",
    "Burgundy": "#800020",
    "Burgundy Lips": "#811C1C",
    "Burnished Copper": "#7C482B",
    "Burnt Brick Lipstick": "#8A3324",
    "Burnt Coral": "#FF7F50",
    "Burnt Orange": "#FFA500",
    "Burnt Sienna": "#A0522D",
    "Burnt Sienna Lipstick": "#E97451",
    "Burnt Umber": "#8A3324",
    "Butter Yellow": "#FFFF00",
    "Buttercream": "#FFF1C1",
    "Camel Brown": "#8B4513",
    "Caramel Brown": "#AF6E4D",
    "Champagne": "#F7E7CE",
    "Charcoal Blue": "#4169E1",
    "Charcoal Gray": "#36454F",
    "Charcoal Smokey Eye": "#2F4F4F",
    "Cherry Blossom": "#FFB7C5",
    "Chestnut": "#954535",
    "Cinnamon Brown": "#7B3F00",
    "Citrine": "#E4D00A",
    "Classic Blue": "#34568B",
    "Cobalt Blue": "#4169E1",
    "Cool Blue": "#4169E1",
    "Cool Gray": "#808080",
    "Cool Lavender": "#E6E6FA",
    "Cool Pastels": "#CBD3EB",
    "Cool Pink": "#FF69B4",
    "Cool Silver": "#C0C0C0",
    "Cool Sky Blue": "#87CEEB",
    "Cool Taupe": "#D8CAB8",
    "Cool Taupe Eyeshadow": "#D8CAB8",
    "Copper": "#CD853F",
    "Copper Jewelry": "#B87333",
    "Copper Lipstick": "#B87333",
    "Coral": "#FF7F50",
    "Coral Lipstick": "#FF7F50",
    "Coral Peach Blush": "#F88379",
    "Coral Pink": "#FF7F50",
    "Crimson Red": "#990000",
    "Dark Apricot": "#E9967A",
    "Dark Berry Lipstick": "#4F1C2D",
    "Dark Mustard": "#8B0000",
    "Dark Smokey Eye": "#2E2E2E",
    "Deep Berry Lipstick": "#4B0F20",
    "Deep Blue Eyeliner": "#00008B",
    "Deep Camel": "#C19A6B",
    "Deep Emerald": "#046307",
    "Deep Moss Green": "#4A5D23",
    "Deep Olive": "#808000",
    "Deep Plum": "#DDA0DD",
    "Deep Purples": "#800080",
    "Deep Ruby": "#841B2D",
    "Deep Teal": "#008080",
    "Deep Teal Eyeliner": "#014D4E",
    "Deep Violet": "#EE82EE",
    "Deep Violet Lipstick": "#9400D3",
    "Desert Rose": "#C08081",
    "Desert Sand": "#EDC9AF",
    "Dusty Apricot": "#E2A76F",
    "Dusty Lavender": "#E6E6FA",
    "Dusty Mauve": "#A3989D",
    "Dusty Rose": "#C08081",
    "Dusty Terracotta": "#D99058",
    "Earthy Red Lipstick": "#8B0000",
    "Electric Blue": "#7DF9FF",
    "Electric Green": "#98FB98",
    "Emerald Green": "#2E8B57",
    "Emerald Green Eye": "#50C878",
    "Espresso Brown": "#BC8F8F",
    "Forest Green": "#228B22",
    "Frost Blue": "#4682B4",
    "Frost Pink": "#FF69B4",
    "Frosted Lilac": "#E6DAF0",
    "Frosted Peach": "#FFDAB9",
    "Frosted Tones": "#F4F4F4",
    "Frosty Gray": "#708090",
    "Frosty Pastels": "#E5E4E2",
    "Frosty White": "#F8F8FF",
    "Frosty Yellow": "#FFFF00",
    "Gilded Bronze Jewelry": "#C28840",
    "Gold": "#FFD700",
    "Gold Accessories": "#FFD700",
    "Golden Beige Eyeshadow": "#FBE7B2",
    "Golden Bronze": "#DAA520",
    "Golden Brown": "#DAA520",
    "Golden Eye Makeup": "#FFD700",
    "Graphite": "#FFFAF0",
    "Gunmetal Gray": "#2a3439",
    "Gunmetal Jewelry": "#2a3439",
    "Harsh Orange": "#FF8C00",
    "Honey Nude Lipstick": "#E6C3A0",
    "Honeydew": "#F0FFF0",
    "Hot Pink": "#FF69B4",
    "Ice Blue": "#F0F8FF",
    "Ice Pink": "#FFC0CB",
    "Icy Blue": "#AFEEEE",
    "Icy Lavender": "#E6E6FA",
    "Icy Lilac": "#E0BBE4",
    "Icy Pink": "#F8BBD0",
    "Icy Pink Lipstick": "#F8C8DC",
    "Icy Silver": "#C0C0C0",
    "Icy Yellow": "#FFFF00",
    "Indigo": "#4B0082",
    "Jade": "#00A86B",
    "Lavender": "#E6E6FA",
    "Lemon Yellow": "#FFF700",
    "Light Apricot": "#FDD5B1",
    "Light Charcoal": "#F08080",
    "Light Gold": "#F08080",
    "Light Gray": "#D3D3D3",
    "Light Lavender Eyeshadow": "#E6E6FA",
    "Light Pastel Yellow": "#FFFFE0",
    "Light Pastels": "#B0C4DE",
    "Light Pink Lipstick": "#FFB6C1",
    "Light Sky Blue": "#87CEFA",
    "Lilac": "#C8A2C8",
    "Lime Green": "#32CD32",
    "Mahogany": "#C04000",
    "Marigold": "#FFD700",
    "Marigold Eyeshadow": "#FCC200",
    "Mauve": "#E0B0FF",
    "Midnight Blue": "#191970",
    "Midnight Indigo": "#191970",
    "Mint": "#F5FFFA",
    "Moss Green": "#8A9A5B",
    "Mustard": "#FFDB58",
    "Mustard Yellow": "#FFFF00",
    "Muted Coral": "#E9967A",
    "Muted Green Eye": "#8DA399",
    "Muted Mustard": "#D2B04C",
    "Muted Rose Lipstick": "#C08081",
    "Muted Teal": "#5F9EA0",
    "Navy Blue": "#87CEEB",
    "Navy Smokey Eye": "#1A1A40",
    "Neon Cyan": "#00FFFF",
    "Neon Green": "#39FF14",
    "Neon Lime": "#00FF00",
    "Neon Orange": "#FFA500",
    "Neon Pink": "#FF6EC7",
    "Neon Yellow": "#FFFF33",
    "Olive": "#808000",
    "Olive Drab": "#6B8E23",
    "Olive Green": "#808000",
    "Olive Green Eyeliner": "#708238",
    "Onyx Black": "#000000",
    "Orange Red Lipstick": "#FF4500",
    "Pale Lavender": "#E6E6FA",
    "Pale Pastel Blue": "#4682B4",
    "Pale Pink": "#FFC0CB",
    "Pale Silver": "#C0C0C0",
    "Pastel Blue": "#4682B4",
    "Pastel Pink": "#FFD1DC",
    "Peach": "#FFDAB9",
    "Peach Blush": "#FFDAB9",
    "Petrol Blue": "#4169E1",
    "Pink Beige": "#F6CFCB",
    "Pink Mauve Lipstick": "#D8A1C4",
    "Platinum Jewelry": "#E5E4E2",
    "Plum": "#8E4585",
    "Plum Lipstick": "#8E4585",
    "Powder Blue": "#B0E0E6",
    "Rich Amber": "#FFBF00",
    "Rich Burgundy": "#811C1C",
    "Rose Gold": "#B76E79",
    "Rose Gold Jewelry": "#B76E79",
    "Rosy Beige": "#BC8F8F",
    "Royal Blue": "#4169E1",
    "Rust": "#B7410E",
    "Rustic Orange": "#FFA500",
    "Rustic Orange Eye": "#C1440E",
    "Saffron Yellow": "#ADFF2F",
    "Sage": "#2E8B57",
    "Sage Green": "#2E8B57",
    "Salmon Pink": "#FA8072",
    "Sapphire Blue": "#0F52BA",
    "Sapphire Blue Eyeshadow": "#0F52BA",
    "Seafoam Green": "#2E8B57",
    "Silver Jewelry": "#C0C0C0",
    "Silver-Gray": "#C0C0C0",
    "Sky Blue": "#87CEEB",
    "Sky Blue Eyeshadow": "#87CEEB",
    "Slate Gray": "#708090",
    "Smoke Gray": "#708090",
    "Smokey Gray": "#708090",
    "Smokey Mauve Lipstick": "#A3989D",
    "Smokey Olive": "#6B8E23",
    "Soft Apricot": "#FDD5B1",
    "Soft Cinnamon": "#CD853F",
    "Soft Gold": "#ECD9B0",
    "Soft Mauve": "#E0B0FF",
    "Soft Mauve Lipstick": "#E0B0FF",
    "Soft Pink": "#FFB6C1",
    "Soft Rose": "#E6BCCB",
    "Soft Rose Lipstick": "#FFB6C1",
    "Soft Violet": "#EE82EE",
    "Spring Peach": "#FFDAB9",
    "Steel Gray Eyeliner": "#4682B4",
    "Sunflower Yellow": "#FFDA03",
    "Sunlit Gold": "#FFD700",
    "Teal": "#008080",
    "Terracotta": "#E2725B",
    "Terracotta Blush": "#E2725B",
    "Toasted Almond": "#FFEBCD",
    "Turquoise Eyeliner": "#40E0D0",
    "Vibrant Orange": "#FFA500",
    "Warm Beige": "#F5F5DC",
    "Warm Bronze": "#CD7F32",
    "Warm Brown Eyeshadow": "#8B4513",
    "Warm Copper": "#B87333",
    "Warm Gold": "#FFD700",
    "Warm Gold Eyeshadow": "#FFD700",
    "Warm Gold Highlighter": "#F6E27F",
    "Warm Mustard": "#D2B04C",
    "Warm Nude Lipstick": "#E6B7A9",
    "Warm Peach": "#FFE5B4",
    "Warm Rose": "#FF69B4",
    "Warm Sand": "#ECD9B0",
    "Warm Taupe": "#D2B1A3",
    "White Gold Jewelry": "#E5E4E2",
    "Wine": "#722F37",
    "Wine Red": "#722F37",
    "Gold Jewelry": "#D4AF37",

"Golden Highlighter": "#FFDF00",
    
}

def get_hex_color(name):
    return color_hex_map.get(name, name.lower())

# --- Predict skin tone + undertone from image ---
def predict_from_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (100, 100))
    center_region = img[30:70, 30:70]
    avg_color = center_region.mean(axis=(0, 1))
    r, g, b = avg_color

    if r > 200 and g > 180 and b > 170:
        return 'Fair', 'Cool'
    elif r > 150 and g > 120 and b > 100:
        return 'Medium', 'Neutral'
    else:
        return 'Deep', 'Warm'

# --- Recommend colors based on skin tone and undertone ---
def recommend_colors(skin_tone, undertone):
    try:
        skin_encoded = skin_tone_encoder.transform([skin_tone])[0]
        undertone_encoded = undertone_encoder.transform([undertone])[0]
        input_data = np.array([[skin_encoded, undertone_encoded]])

        prediction = model.predict(input_data)[0]
        clothing = clothing_encoder.inverse_transform([prediction[0]])[0]
        makeup = makeup_encoder.inverse_transform([prediction[1]])[0]
        accessories = accessories_encoder.inverse_transform([prediction[2]])[0]
        avoid = avoid_colors_encoder.inverse_transform([prediction[3]])[0]

        return clothing, makeup, accessories, avoid

    except Exception as e:
        raise ValueError(f"Recommendation failed: {e}")

# --- GUI application ---
def run_app():
    def submit():
        skin_tone = skin_tone_var.get()
        undertone = undertone_var.get()

        if not skin_tone or not undertone:
            messagebox.showwarning("Input Error", "Please select both Skin Tone and Undertone.")
            return

        try:
            clothing, makeup, accessories, avoid = recommend_colors(skin_tone, undertone)

            popup = tk.Toplevel()
            popup.title("Color Recommendation")
            popup.geometry("800x750")
            popup.attributes('-topmost', 1)
            popup.focus_force()
            popup.configure(bg="#FFF8DC")
            center_x = int((screen_width / 2) - (window_width / 2))
            center_y = int((screen_height / 2) - (window_height / 2))

            popup.geometry(f"{window_width}x{window_height}+{center_x}+{center_y}")
            # Create a canvas and a scrollbar for scrolling content
            canvas = tk.Canvas(popup)
            scrollbar = tk.Scrollbar(popup, orient="vertical", command=canvas.yview)
            canvas.configure(yscrollcommand=scrollbar.set)

            canvas.pack(side="left", fill="both", expand=True)
            scrollbar.pack(side="right", fill="y")

            scrollable_frame = tk.Frame(canvas, bg="#FFF8DC")
            canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")

            scrollable_frame.bind(
                "<Configure>",
                lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
            )

            tk.Label(scrollable_frame, text="🎨 Recommended Colors", font=("Helvetica", 18, "bold"), bg="#FFF8DC").pack(pady=20)

            def show_colors(label_text, color_list):
                section_frame = tk.Frame(scrollable_frame, bg="#FFF8DC")
                section_frame.pack(pady=15, padx=20, fill='x')

                tk.Label(section_frame, text=label_text, font=("Helvetica", 16, "bold"), bg="#FFF8DC").pack(anchor='w', pady=(0, 10))

                colors_frame = tk.Frame(section_frame, bg="#FFF8DC")
                colors_frame.pack()

                inch_to_px = 96  # Assuming 96 dpi (you can adjust this value)
                items_per_row = 4

                row_frame = None
                for i, color in enumerate(color_list):
                    if i % items_per_row == 0:
                        row_frame = tk.Frame(colors_frame, bg="#FFF8DC")
                        row_frame.pack(pady=5)

                    color_name = color.strip()
                    hex_color = get_hex_color(color_name)

                    item_frame = tk.Frame(row_frame, bg="#FFF8DC", padx=10, pady=5)
                    item_frame.pack(side='left')

                    color_box = tk.Frame(item_frame, width=inch_to_px*2, height=inch_to_px*2, bg=hex_color, relief='groove', borderwidth=2)
                    color_box.pack()
                    color_box.pack_propagate(False)

                    label = tk.Label(item_frame, text=color_name, font=("Helvetica", 12), bg="#FFF8DC", wraplength=inch_to_px*2, justify="center")
                    label.pack(pady=5)

            show_colors("👗 Clothing:", [c.strip() for c in clothing.split(',')])
            show_colors("💄 Makeup:", [m.strip() for m in makeup.split(',')])
            show_colors("👑 Accessories:", [a.strip() for a in accessories.split(',')])
            show_colors("❌ Colors to Avoid:", [a.strip() for a in avoid.split(',')])

            tk.Button(scrollable_frame, text="OK", command=popup.destroy, font=("Helvetica", 14), bg="#5C4033", fg="white").pack(pady=30)

        except Exception as e:
            messagebox.showerror("Recommendation Error", str(e))

    def upload_image():
        filepath = filedialog.askopenfilename(filetypes=[("Image Files", "*.jpg *.png *.jpeg")])
        if filepath:
            try:
                predicted_skin_tone, predicted_undertone = predict_from_image(filepath)
                skin_tone_var.set(predicted_skin_tone)
                undertone_var.set(predicted_undertone)
                messagebox.showinfo("Image Analysis Complete", f"✅ Detected Skin Tone: {predicted_skin_tone}\n✅ Detected Undertone: {predicted_undertone}")
            except Exception as e:
                messagebox.showerror("Image Error", str(e))

    root = tk.Tk()
    root.title("Skin Color Recommender")
    root.configure(bg="#FFF8DC")

    window_width = 900
    window_height = 750

    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()

    center_x = int((screen_width / 2) - (window_width / 2))
    center_y = int((screen_height / 2) - (window_height / 2))

    root.geometry(f"{window_width}x{window_height}+{center_x}+{center_y}")
    root.attributes('-topmost', 1)
    root.lift()

    tk.Label(root, text="Select or Detect Skin Tone:", font=("Helvetica", 14), bg="#FFF8DC").pack(pady=10)
    skin_tone_var = tk.StringVar()
    skin_tone_dropdown = ttk.Combobox(root, textvariable=skin_tone_var, font=("Helvetica", 12), values=list(skin_tone_encoder.classes_))
    skin_tone_dropdown.pack()

    tk.Label(root, text="Select or Detect Undertone:", font=("Helvetica", 14), bg="#FFF8DC").pack(pady=10)
    undertone_var = tk.StringVar()
    undertone_dropdown = ttk.Combobox(root, textvariable=undertone_var, font=("Helvetica", 12), values=list(undertone_encoder.classes_))
    undertone_dropdown.pack()

    tk.Button(root, text="Upload Image", command=upload_image, font=("Helvetica", 13), bg="#5C4033", fg="white").pack(pady=20)
    tk.Button(root, text="Get Recommendation", command=submit, font=("Helvetica", 13), bg="#5C4033", fg="white").pack(pady=20)

    root.mainloop()

# --- Run the app ---

run_app()
