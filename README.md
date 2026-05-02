# rada
1.landing page 
sign up
verification
complete profile 
dashboard


docker exec -it supabase_db_rada psql -U postgres -d postgres -c "UPDATE auth.users SET email_confirmed_at = NOW(), last_sign_in_at = NOW() WHERE email = 'YOUR_EMAIL_HERE';"




🌀 Neural Link: AI-Driven Learning ArchitectureNeural Link is a next-generation educational platform designed to bridge the gap between static course catalogs and dynamic career pathways. By utilizing a Hybrid Inference Engine, the platform calculates real-time "Skill Vectors" to provide students with mathematically optimized learning trajectories.🚀 Key Features1. Hybrid Recommendation Engine (HRE)The core of the project is a dual-layered algorithm that combines:Content-Based Filtering: Utilizing the Jaccard Similarity Coefficient to map user skills against course toolsets.Collaborative Filtering: Peer-cluster analysis that identifies trends among students with similar profiles to suggest high-value "neighbor" content.2. Explainable AI (XAI) DiagnosticsUnlike "Black Box" algorithms, Neural Link provides a Model Diagnostics Suite. Users and educators can view:Similarity Matrices: Visual breakdowns of skill overlaps.Inference Logs: Real-time backend logs proving the mathematical validity of every recommendation.Vector Lock Tracking: Confidence percentages based on data density.3. Adaptive "AI Strategy" CoachThe system monitors user telemetry (Readiness, Completion, Streak) and generates proactive commands to maintain learning momentum and prevent churn.🛠 Tech StackLayerTechnologyPurposeFrontendNext.js 14App Router, Server Components, and Framer Motion for UI.BackendNestJSModular microservice architecture for the Inference Engine.DatabasePostgreSQL + PrismaRelational mapping for complex user-course vectors.AnalyticsChart.jsData visualization for Model Diagnostics.SecurityJWT + BcryptSecure neural profile synchronization.📐 The Math Behind the RecommendationsThe platform calculates the Jaccard Index $J(A, B)$ to determine the similarity between the User Skill Set ($A$) and the Course Tool Set ($B$):$$J(A, B) = \frac{|A \cap B|}{|A \cup B|}$$This is then weighted against the Collaborative Peer Interest ($P$) to create the final Hybrid Score ($H$):$$H = (J \times w_1) + (P \times w_2)$$(Where $w_1$ and $w_2$ are dynamic weights adjusted based on data availability).















3.5 Collaborative Filtering and Hybrid Inference
The system implements a Weighted Hybrid Inference Engine to maximize recommendation accuracy.
3.5.1 Content-Based Vectoring (Jaccard Similarity) To handle new users without history, the system computes the similarity between a user’s skills (A) and a course’s tools (B) using the Jaccard Index: J(A, B) = |A ∩ B| / |A ∪ B|
3.5.2 User-Based Collaborative Filtering This method identifies "peer clusters"—users with similar skill vectors—and recommends courses based on the successful completion paths of those neighbors. Similarity is computed using Cosine Similarity to measure the distance between user profiles in the vector space.
3.5.3 Hybrid Weighting Mechanism The final recommendation score is a weighted sum of the Content Score and the Collaborative Score. The system uses Dynamic Weighting to shift 100% focus to Content Matching when no peer data is available, effectively solving the cold-start issue.
