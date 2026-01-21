import { useState } from 'react';
import './DietPlans.css';

// Static Database of Diet Plans
const STATIC_PLANS = {
    'Vegetarian-Weight Loss': `
# 7-Day Sattvic Weight Loss Plan

## 🥗 Philosophy
This plan focuses on high-fiber, easily digestible foods that stoke the digestive fire (Agni) while naturally reducing calorie intake.

| Day | Breakfast (7:00 AM) | Lunch (1:00 PM) | Dinner (7:00 PM) |
|-----|-------------------|-----------------|------------------|
| **Mon** | Warm Lemon Water + Poha with Peas | Quinoa Khichdi with Ghee | Pumpkin Soup + 1 Multigrain Roti |
| **Tue** | Oatmeal with Almonds & Honey | Moong Dal Cheela + Mint Chutney | Steamed Vegetables + Herbal Tea |
| **Wed** | Fresh Fruit Bowl (Papaya/Melon) | Brown Rice + Palak Dal | Bottle Gourd (Lauki) Curry + Roti |
| **Thu** | Idli with Sambar (No Coconut Chutney) | Sprouted Moong Salad | Vegetable Clear Soup |
| **Fri** | Ragi Porridge with Jaggery | Curd Rice with Pomegranate | Grilled Paneer + Sautéed Greens |
| **Sat** | Besan Chilla with Tomatoes | Bajra Roti + Baingan Bharta | Lentil Soup (Dal Shorba) |
| **Sun** | Smoothie (Spinach, Banana, Date) | Mixed Vegetable Curry + Rice | Roasted Sweet Potato + Chaas |

## 🌟 Dish of the Week: Moong Dal Khichdi
Perfect for detoxing. Cook yellow moong dal and rice with turmeric, cumin, and ginger until soft. Top with a teaspoon of ghee.

## 🛒 Shopping List
- Grains: Brown Rice, Quinoa, Ragi, Bajra
- Lenthils: Moong Dal, Toor Dal
- Vegetables: Spinach, Pumpkin, Bottle Gourd, Brinjal
- Fruits: Papaya, Pomegranate, Bananas
  `,
    'Vegan-Energy Boost': `
# 7-Day High-Prana Energy Plan (Vegan)

## ⚡ Philosophy
Foods high in Prana (life force) to keep you energetic without caffeine crashes.

| Day | Breakfast | Lunch | Dinner |
|-----|-----------|-------|--------|
| **Mon** | Green Smoothie | Buddha Bowl with Tofu | Stir-fry Veggies with Quinoa |
| **Tue** | Chia Seed Pudding | Chickpea Curry + Brown Rice | Zucchini Noodles with Pesto |
| **Wed** | Avocado Toast | Lentil Soup + Salad | Sweet Potato Chaat |
| **Thu** | Fruit Salad with Seeds | Kidney Bean (Rajma) Wrap | Vegetable Stew |
| **Fri** | Upma with lots of veggies | Mushroom Matar Curry | Pumpkin & Carrot Soup |
| **Sat** | Banana & Oat Pancakes | Hummus + Veggie Sticks | Soy Chunk Pulao |
| **Sun** | Matcha Latte + Nuts | Tofu Scramble | Roasted Cauliflower + Dip |
  `,
    'Gluten-Free-Detox': `
# 7-Day Ayurvedic Detox Plan (GF)

## 🌿 Philosophy
Eliminating gluten to reduce inflammation and give the digestive system a reset.

| Day | Breakfast | Lunch | Dinner |
|-----|-----------|-------|--------|
| **Mon** | Warm Apple Stew | Kitchari (Rice + Dal) | Vegetable Broth |
| **Tue** | Buckwheat Porridge | Millet Risotto | Steamed Broccoli & Carrots |
| **Wed** | Papaya Bowl | Sorghum (Jowar) Roti + Dal | Green Pea Soup |
| **Thu** | Smoothie Bowl | Amaranth Salad | Baked Sweet Potato |
| **Fri** | Quinoa Upma | Buckwheat Dosas | Vegetable Stew |
| **Sat** | Fruit Platter | Corn Palak (Spinach) | Pumpkin Soup |
| **Sun** | Herbal Tea + Nuts | Sabudana Khichdi | Roasted Root Vegetables |
  `
};

const DietPlans = () => {
    const [loading, setLoading] = useState(false);
    const [dietPlan, setDietPlan] = useState(null);

    const [profile, setProfile] = useState({
        dietType: 'Vegetarian',
        goal: 'Weight Loss'
    });

    const handleGenerate = async () => {
        setLoading(true);
        // Simulate processing time
        setTimeout(() => {
            const key = `${profile.dietType}-${profile.goal}`;
            // Fallback to a default plan if specific combination doesn't exist
            const plan = STATIC_PLANS[key] || STATIC_PLANS['Vegetarian-Weight Loss'];

            setDietPlan(plan);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="diet-page">
            <section className="diet-hero">
                <div className="container">
                    <h1>Sattvic Diet Plans</h1>
                    <p>Curated 7-day meal plans aligned with Ayurvedic principles.</p>
                </div>
            </section>

            <div className="container section">
                <div className="diet-grid">
                    {/* Input Form */}
                    <div className="diet-form card">
                        <h2>Choose Your Plan</h2>
                        <div className="form-group">
                            <label>Diet Type</label>
                            <select
                                value={profile.dietType}
                                onChange={(e) => setProfile({ ...profile, dietType: e.target.value })}
                            >
                                <option value="Vegetarian">Vegetarian (Sattvic)</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Gluten-Free">Gluten-Free</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Primary Goal</label>
                            <select
                                value={profile.goal}
                                onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
                            >
                                <option value="Weight Loss">Weight Loss</option>
                                <option value="Energy Boost">Energy Boost</option>
                                <option value="Detox">Detox / Cleansing</option>
                            </select>
                        </div>

                        <button
                            className="btn btn-primary btn-block"
                            onClick={handleGenerate}
                            disabled={loading}
                        >
                            {loading ? 'Finding Plan...' : 'View Meal Plan'}
                        </button>
                    </div>

                    {/* Results Display */}
                    <div className="diet-result card">
                        {dietPlan ? (
                            <div className="plan-content animate-fade-in">
                                <div className="plan-header">
                                    <h3>Your Recommended Plan</h3>
                                    <button className="btn btn-sm btn-outline" onClick={() => window.print()}>Print / PDF</button>
                                </div>
                                <div className="markdown-body">
                                    {/* Simple Markdown Rendering */}
                                    {dietPlan.split('\n').map((line, i) => {
                                        const parseBold = (text) => {
                                            return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={index} className="text-highlight">{part.slice(2, -2)}</strong>;
                                                }
                                                return part;
                                            });
                                        };

                                        if (line.startsWith('# ')) return <h1 key={i} className="plan-title">{line.replace('# ', '')}</h1>;
                                        if (line.startsWith('## ')) return <h2 key={i} className="plan-subtitle">{line.replace('## ', '')}</h2>;
                                        if (line.trim().startsWith('|')) return <div key={i} className="table-row-text">{parseBold(line)}</div>;
                                        if (!line.trim()) return <br key={i} />;
                                        return <p key={i} className="plan-text">{parseBold(line)}</p>;
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="placeholder-state">
                                <div className="icon">🥗</div>
                                <p>Select your preferences to view a curated nutrition guide.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietPlans;
