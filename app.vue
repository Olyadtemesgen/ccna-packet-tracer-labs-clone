<template>
  <div>
    <NuxtPage />
    <template>
    <div>
        <nav>
            <PromoBanner />
            <Header />
        </nav>
        <main>
            <CourseOverview />
            <div class="sm:w-[55%] flex flex-col justify-center align-middle md:block ml-0 space-y-8 md:ml-28 mt-6">
                <CertificationsInfo />
                <LearningObjectives />
                <ExploreTopics />
                <CourseContent />
                <RequirementsAndDescriptions />
                <FeaturedReview />
                <CoursesStudentsAlsoBought />
                <FrequentlyBoughtTogether />
                <InstructorSection />
                <CourseReviews />
                <MoreCoursesSection />
            </div>
        </main>
        <Footer/>
    </div>
</template>
  
  </div>
</template>
