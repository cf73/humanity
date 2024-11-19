<div class="flex flex-wrap gap-2">
    @foreach ($this->tags as $tag)
    <button
        type="button"
        wire:key="{{ $tag['field'].$tag['value'] }}"
        class="h-8 py-2.5 px-4 me-2 text-sm font-medium inline-flex items-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 
            hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-default transition-opacity duration-500"
        wire:loading.class="opacity-40"
        >
            <div class="whitespace-nowrap textMeta">{{ $tag['optionLabel'] }}</div>
            <div class="ml-3 cursor-pointer" wire:click="removeOption('{{ $tag['field'] }}', '{{ $tag['value'] }}')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
    </button>
    @endforeach
</div>