<template>
    <div>
        <h1>Vue</h1>
        <ProjectsList :projects="projects" />
    </div>
</template>

<script>

import ProjectsList     from '@/components/projects/projectsList'

export default {
    components: {
        ProjectsList,
    },
    data () {
        return {
            projects: [
                {
                    title: 'PerfectPC (in progress)',
                    description: 'Приложение планируется использовать, чтобы подбирать комплектующие для ПК, сравнивать цены. Пользователь может выбрать комплектующие, сохранить сборку, сравнить цены с другими сборками. Цены буду собираться парсером, и обновляться в определённый промежуток времени (например 1 раз в месяц).',
                    preview: 'Приложение для мониторинга цен комплектующих на ПК',
                    gallery_folder: 'perfect_pc',
                    gallery: ['perfect_pc.jpg', 'Screenshot_1.jpg'],
                    links: {
                    git: 'https://github.com/Stratarion/perfect-pc',
                    pages: 'https://stratarion.github.io/perfect-pc/'
                    },
                    src: 'perfect_pc.jpg',
                },
            ]
        }
    }
}
</script>